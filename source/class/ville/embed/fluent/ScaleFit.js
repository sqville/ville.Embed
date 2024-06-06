/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScaleFit",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M6.88 7.92a.5.5 0 0 1-.05.7l-1 .88H8.5a.5.5 0 0 1 0 1H5.83l1 .87a.5.5 0 1 1-.66.76l-2-1.75a.5.5 0 0 1 0-.76l2-1.75a.5.5 0 0 1 .7.05Zm7.29 2.58-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 0 0-.66.76l1 .87H11.5a.5.5 0 0 0 0 1h2.67ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Z";
   var pathdfilled = "M2 6v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11.12 6.08a.5.5 0 0 1 .05-.7l1-.88H11.5a.5.5 0 0 1 0-1h2.67l-1-.87a.5.5 0 0 1 .66-.76l2 1.75a.5.5 0 0 1 0 .76l-2 1.75a.5.5 0 0 1-.7-.05ZM6.88 7.92a.5.5 0 0 1-.05.7l-1 .88H8.5a.5.5 0 0 1 0 1H5.83l1 .87a.5.5 0 0 1-.66.76l-2-1.75a.5.5 0 0 1 0-.76l2-1.75a.5.5 0 0 1 .7.05Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});