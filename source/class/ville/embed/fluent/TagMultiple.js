/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TagMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.2 2.59A2 2 0 0 1 10.63 2h4.45a2 2 0 0 1 2 2v4.37a2 2 0 0 1-.59 1.43l-5.82 5.76a2 2 0 0 1-2.82-.01l-4.38-4.39a2 2 0 0 1 0-2.82L9.2 2.59Zm1.42.41a1 1 0 0 0-.7.3L4.15 9.03a1 1 0 0 0 0 1.42l4.39 4.38a1 1 0 0 0 1.4 0l5.83-5.76a1 1 0 0 0 .3-.7V4a1 1 0 0 0-1-1h-4.46ZM3 11.8a2 2 0 0 0 .46 2.11l2.97 2.98a4 4 0 0 0 5.65.02l4.4-4.36a2 2 0 0 0 .6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 0 1-4.23 0l-.5-.5a4.05 4.05 0 0 1-.2-.2l-2.98-2.98A2 2 0 0 1 3 11.8Z",
    FILLED : "M3 11.8a2 2 0 0 0 .46 2.11l2.97 2.98a4 4 0 0 0 5.65.02l4.4-4.36a2 2 0 0 0 .6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 0 1-4.23 0l-.5-.5a4.05 4.05 0 0 1-.2-.2l-2.98-2.98A2 2 0 0 1 3 11.8Zm6.2-9.21A2 2 0 0 1 10.63 2h4.45a2 2 0 0 1 2 2v4.37a2 2 0 0 1-.59 1.43l-5.82 5.76a2 2 0 0 1-2.82-.01l-4.38-4.39a2 2 0 0 1 0-2.82L9.2 2.59Zm4.3 3.91a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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