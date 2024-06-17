/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MusicNoteOff2",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L7 7.71v5.79a2.5 2.5 0 1 0 1 2V8.7l3.41 3.42a2.5 2.5 0 0 0 3.46 3.46l2.28 2.27a.5.5 0 0 0 .7-.7l-15-15Zm11.3 12.7a1.5 1.5 0 0 1-2-2l2 2ZM5.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm8-3c-.12 0-.24 0-.35.02l2.83 2.83.02-.35V3.18a1 1 0 0 0-1.3-.95l-7 2.18a1 1 0 0 0-.61.55l.91.92v-.51l7-2.19v1.95L9.1 6.98l.8.8 5.1-1.6v5.32c-.42-.31-.94-.5-1.5-.5Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L7 7.71v5.79a2.5 2.5 0 1 0 1 2V8.7l3.41 3.42a2.5 2.5 0 0 0 3.46 3.46l2.28 2.27a.5.5 0 0 0 .7-.7l-15-15ZM13.5 11c-.12 0-.24 0-.35.02l2.83 2.83.02-.35V3.18l-.01-.16a1 1 0 0 0-1.29-.8l-7 2.2a1 1 0 0 0-.61.54l2.8 2.82L15 6.18v5.32c-.42-.31-.94-.5-1.5-.5Z"
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