/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoxMultipleCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1 0V5.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47V9.6c.36.18.7.4 1 .66V5.1a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33ZM12.04 8.7c.3.11.54.32.71.57-.33.11-.65.26-.95.43a.5.5 0 0 0-.12-.07L8.22 8.31a2 2 0 0 0-1.44 0L3.32 9.64a.5.5 0 0 0-.32.47v4.78c0 .2.13.4.32.47l3.46 1.33a2 2 0 0 0 1.44 0l1.07-.42c.11.32.25.63.41.92l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33Zm-1.6 1.3a.5.5 0 0 1 .61.2c-.36.3-.68.63-.96 1l-2.09.8v2.5a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10Zm5.65-4.72a.5.5 0 0 0-.64-.28l-2.77 1.06a.5.5 0 0 1-.36 0L9.55 5.01a.5.5 0 0 0-.35.93L11.96 7c.35.14.73.14 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.84a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    FILLED : "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1.94.23l3.46 1.34c.61.23 1.1.7 1.36 1.27a5.55 5.55 0 0 1 4.24 1.2V5.12a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm1.87 2.15a.5.5 0 1 1 .35.94l-2.76 1.06a1.5 1.5 0 0 1-1.08 0L9.2 5.47a.5.5 0 0 1 .35-.94l2.77 1.07a.5.5 0 0 0 .36 0l2.77-1.07Zm-3.41 4.18c.3.11.54.32.71.57-.62.21-1.2.53-1.7.93a.5.5 0 0 0-.6-.2L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l2.09-.8a5.48 5.48 0 0 0-.39 5.98l-1.12.43a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 0 1 2.16 0l3.46 1.33ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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