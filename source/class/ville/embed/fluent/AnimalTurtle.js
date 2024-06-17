/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AnimalTurtle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 0 0-1.36 2.77L4.27 9H2.5a.5.5 0 0 0-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 0 0 1.2 1.81h1.47c.5 0 .97-.3 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 0 0 1.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 0 0-1.4-2.63A4.28 4.28 0 0 0 9.1 4Zm5.57 7-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2Zm-.57 1.53.44 1.05a.31.31 0 0 1-.29.43H12.8a.31.31 0 0 1-.28-.18l-.35-.75c.65-.14 1.3-.32 1.93-.55Zm-7.93.55-.36.75a.31.31 0 0 1-.28.18H4.07a.31.31 0 0 1-.29-.43l.44-1.05c.64.23 1.29.41 1.95.55Zm-2.54-1.96c-.27-.26-.5-.65-.58-1.12h.92l-.34 1.12ZM5.5 8.44c.27-.91.6-1.77 1.15-2.4A3.03 3.03 0 0 1 9.1 5c1.2 0 2 .43 2.56 1.05.59.63.96 1.5 1.23 2.39l.9 3.13c-3 1.1-6.25 1.1-9.25 0l.95-3.13Z",
    FILLED : "M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 0 0-1.36 2.77L4.27 9H2.5a.5.5 0 0 0-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 0 0 1.2 1.81h1.47c.5 0 .97-.3 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 0 0 1.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 0 0-1.4-2.63A4.28 4.28 0 0 0 9.1 4Zm5.57 7-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2Zm-2.5 2.08c.65-.14 1.3-.32 1.93-.55l.44 1.05a.31.31 0 0 1-.29.43H12.8a.31.31 0 0 1-.28-.18l-.35-.75Zm-7.95-.55c.64.23 1.29.41 1.95.55l-.36.75a.31.31 0 0 1-.28.18H4.07a.3.3 0 0 1-.29-.43l.44-1.05ZM3.97 10l-.34 1.12c-.27-.26-.5-.65-.58-1.12h.92Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});